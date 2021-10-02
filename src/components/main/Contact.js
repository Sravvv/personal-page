import React from 'react';
import './Contact.css'
import '../../font-awesome-4.7.0/css/font-awesome.min.css'

function Contact(props) {
    return (
        <div className={(props.current === 'Contact') ? 'divActive' : 'divInactive'}> 
            <div class="contactDiv">
                <dl class="dl dl-vertical"> 
                    <dt>Email: </dt> 
                    <dd> 
                        <a href="mailto:sravantc@gmail.com">
                            <i class="icon fa fa-envelope blackIcon" color="black"> <span> sravantc@gmail.com </span> </i>
                        </a>
                    </dd>
                    <dt>Linkedin: </dt> 
                    <dd> 
                        <a href="https://www.linkedin.com/in/sravant-chadalawada/">
                            <i class="icon fa fa-linkedin blackIcon"> <span> Sravant-Chadalawada </span> </i>
                        </a>
                    </dd>
                    <dt>Github: </dt>
                    <dd>
                        <a href="https://github.com/Sravvv">
                            <i class="icon fa fa-github blackIcon"> <span> Sravvv </span> </i>
                        </a>
                    </dd>
                </dl>
            </div>
        </div>
    );
}

export default Contact;
