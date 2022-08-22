import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { FaLaptopCode } from 'react-icons/fa';
//import Service from './service';

class Services extends Component{
    constructor(props){
        super(props);
        this.state={
            services:[
                {
                    id:0,
                    title:'Web Development',
                    body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quos dolore suscipit quam necessitatibus quo earum vero, culpa exercitationem fuga!',
                    more:'Read more'
                },
                {
                    id:1,
                    title:'Andriod Development',
                    body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quos dolore suscipit quam necessitatibus quo earum vero, culpa exercitationem fuga!',
                    more:'Read more'
                },
                {
                    id:2,
                    title:'Game Development',
                    body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quos dolore suscipit quam necessitatibus quo earum vero, culpa exercitationem fuga!',
                    more:'Read more'
                },
            ]
        }
    }
    render(){
        const service=this.state.services.map((serv)=>{
            return(
                <div key={serv.id}>
                    <section className='mainserv p-3 d-flex card1'>
                    <div className="container service">
                        <div className='align-items-center justify-content-between'>
                            <div className="card  bg-dark text-light">
                                <div className="card-body  text-center">
                                    <h3 className='card-title'>{serv.title}</h3>
                                    <p className='card-text'>{serv.body}</p>
                                    <a href="##" className='btn btn-lg btn-primary'>{serv.more}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
            )
        });
        return(
            <div>
                {service}
            </div>
        )
    }
}
export default Services;