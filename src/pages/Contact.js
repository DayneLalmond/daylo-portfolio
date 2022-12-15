import React from 'react';
import '../styles/index.css';

function Contact() {

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [questions, setQuestions] = useState('');

  // const validation = (e) => {
  //   const { target } = e;
  //   const form = target.name;
  //   const value = target.value;

  //   if (form === "name") {
  //     setName(value);
  //   } else if (form === "email") {
  //     setEmail(value);
  //   } else if (form === "questions") {
  //     setQuestions(value)
  //   }
  // };

  // const submit = (e) => {
  //   e.preventDefault();
  //     return;
  //   }
  //   setName("");
  //   setEmail("");

  // function validate {
  // var validation = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  // if (inputText.value.match(validation))
  // {
  //   alert("valid");
  //   return true;
  // }
  // else {
  //   alert("invalid")
  //   return false;
  // }}

  return (
    <main>
      <h2>Stay connected</h2>
      <div className="contact-info">
        <form action="mailto:dlalmondo@gmail.com" method="post" enctype="text/plain" onSubmit="">
          <input type="text" placeholder="Name" required/>
          <input type="email" placeholder="Email" required/>
          <textarea rows="4" cols="20" placeholder="Questions" required></textarea>
          <button className="send" type="submit">Connect</button>
        </form>
        {/* <a id="email" href="mailto:dlalmondo@gmail.com">dlalmondo@gmail.com</a> */}
      </div>
    </main>
  );
}

export default Contact;