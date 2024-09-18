import './index.css';
import Post from './models/post';

const renderPost = async (postId) => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!response.ok){
                throw new Error('Ошибка получения данных')
            }
            const dataPosts = await response.json();
            const post = dataPosts.find(post => post.id === postId);
            post ? console.log(post) : console.log('Пост не найден');
            const responseCmts = await fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            if(!responseCmts.ok){
                throw new Error('Ошибка получения данных') 
            }
            const allCmts = await responseCmts.json();
            allCmts ? console.log(allCmts) : console.log('Комментариев нет');
            const elements = {};
            for(let element in post){
                if(element === 'title' || element === 'body'){
                    elements[element] = post[element]
                }
            }
            console.log(elements);
            const newPost = new Post(elements, allCmts);
            document.body.appendChild(newPost.setup())
            
        } catch(error) {
            console.log(error)
        }
}

renderPost(10);
