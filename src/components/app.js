import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutMenu from './about-menu';
import Home from './Home';
import foo from './foo';

class app extends Component {
    render() {
        return(
        <BrowserRouter>
         <div>
             <switch>
                 <Route path ="/" component= {Home} exact/>
                 <Route path ="/about" component= {AboutMenu} /> 
                 <Route path ="/foo" component= {foo}/>
             </switch>
         </div>
        </BrowserRouter>
        );
    }
};




export default app;








// export default function App(props) {
//     return (
//         <div className="app">
//             {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
//             <AboutMenu />
//         </div>
//     );
// }
