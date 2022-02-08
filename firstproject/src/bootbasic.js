import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'React'; 
import {Container,Row,Col,Button} from 'reactstrap';
import Div from './Div';
// function Boot(){
//     return(
//         <div>
//             <Container>
//                 <Row>
//                     <Col lg={6}>
//                     <Div/>
//                     </Col>
//                     <Col lg={6}>
//                     <Div/>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

class Name1 extends Component
{
    constructor(props){
        super(props);
        this.state={
            name:'jamil',
            ade:'23'
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}
export default Name1;
