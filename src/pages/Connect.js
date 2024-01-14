import React from 'react';
import '../styles/index.css';
function Connect() {

  return (
    <main>
      <h3>Let's connect</h3>
      
      <section className="topics">
        {/* <mark>Contact Me</mark> */}
        <h4>Fill the form</h4>
        <p className="blogs"><b>Y</b>es, it really works. By submitting this completed form, it will notify me.</p>
        <div>
          <form>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Message"/>
          <input type="button" value="Send"/>
          </form>

        </div>
        <h4>Study with me</h4>
        <p className="blogs"><b>J</b>oin my study server. Enter your discord username and send a request to join.</p>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="button" value="Request"/>
          </form>
      </section>
    </main>
  );
}

export default Connect;