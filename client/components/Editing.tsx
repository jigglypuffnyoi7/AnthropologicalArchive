import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';




const EditingPage = () => {
    const [articleData, setArticleData] = useState<{title: string, author: string, content: {heading: string, text: string}[]}>({
        title: '',
        author: '',
        content: []
    });
    const [inputText, setInputText] = useState<{heading: string, text: string}[]>([]);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [navTitle, setNavTitle] = useState<string>('');

    const param = useParams();
    const navigate = useNavigate();


    //fetch the data from params
    const getArticle = async () => {
        const response = await fetch(`/api/article/view/${param.title}`)
        const data = await response.json();
        // console.log(response, 'response || data', data)
        const contentArr = JSON.parse(data.content)
        // console.log('contentArr', contentArr)
        setArticleData({title: data.title, author: data.author, content: contentArr});
     
    }
    console.log('new articleData: ', articleData)
    console.log('new input text: ', inputText);
    
    useEffect(() => {getArticle()}, [param.title]);
    useEffect(() => {setInputText(articleData.content)}, [articleData]);
    // show title & author
    // show other shit for editing
    const onChangeHandler = (e: any) => {
        const property = (e.target.id.includes('h')) ? 'heading' : 'text';
        const index = Number(e.target.id.slice(1))
        inputText[index][property] = e.target.value
        setInputText([...inputText])
    };
 

    
    // for every obj in content arr add like text inputs
    const editFields: React.JSX.Element[] = inputText.map((obj, i) => {
        // some form with that data in it
        return (
            <div className='formsubmit2'>
          <p>Header: </p>
            <input className='header'value={obj.heading} id={`h${i}`} onChange={onChangeHandler} type="text" />
        
          <p>Content: </p>
            <input className='header' value={obj.text} id={`t${i}`} onChange={onChangeHandler} type="text" />
          
        </div>
        )
    })

    // have a button to add aseciton
    const addSection = () => {
        setInputText([...inputText, {heading: '', text: ''}])
    }
    const deleteSection = () => {
        const inputTextCopy = inputText.slice()
        inputTextCopy.pop();
        setInputText(inputTextCopy);
    }

    // function to send updating
    async function sendPost(){
        setNavTitle(articleData.title);
        
        const newContent = inputText;
        const body = {
          title: articleData.title,
          author: articleData.author,
          content: JSON.stringify(newContent)
        }
        try{
          await fetch('/api/article/update', {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(body)
          })
          
          setIsSubmitted(true);
          
        }catch(err){
          console.log('Error while adding article: ', err)
        }
      }

      //returns you to article
      useEffect(() => {
        if (isSubmitted && navTitle){
        navigate(`/article/${navTitle}`);
        }
        setNavTitle('');
      },[isSubmitted])
    

  
    return (
        <div>
          <div className='article'>
          <div className='articleTitle'>
            <h1 className='articleh1'>{articleData.title}</h1> 
            <p>by {articleData.author}</p>
          </div>
             {editFields}
          </div>
          <button className='submitform' style={{marginTop:'15px'}}onClick={addSection}>Add Section</button>
          <button className ='submitform' style={{marginLeft:'10px', marginTop: '15px'}}onClick={deleteSection}>Delete Section</button>
          <br/>
          <button className='submitform' onClick={sendPost}>Submit Edit</button>
        </div>
    )
}

export default EditingPage