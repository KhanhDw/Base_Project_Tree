import Button from '../components/button';
import MainLayout from "../layouts/layout";
import defaultUserSchema from "../models/userSchema";
// import { useState, useEffect } from 'react';    
import { Link } from 'react-router-dom'; // Thêm Link
// import { getTodos, addTodo } from '../services/api';



function Home() {
    defaultUserSchema.age = 30;
    defaultUserSchema.name = "John Doe";

    // const [todos, setTodos] = useState([]);
    // const [input, setInput] = useState('');
  
    // useEffect(() => {
    //   getTodos().then(data => setTodos(data));
    // }, []);
  
    // const handleAddTodo = () => {
    //   addTodo(input).then(newTodo => {
    //     setTodos([...todos, newTodo]);
    //     setInput('');
    //   });
    // };
  



    return (
        <MainLayout>
            <h1>Welcome to the Home Page</h1>
            <Link to="/about">Go to About</Link>
            <p>{`Name: ${defaultUserSchema.name}`}</p>
            <p>{`age: ${defaultUserSchema.age}`}</p>
            <Button>Test button</Button>
        </MainLayout>
    );
}

export default Home;
