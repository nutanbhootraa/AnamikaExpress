import React from 'react';
import Grid from '@material-ui/core/Grid';
import Zero from './blogFiles/Zero';
import One from './blogFiles/One';
import Two from './blogFiles/Two';
import Three from './blogFiles/Three';
import Four from './blogFiles/Four';
import Five from './blogFiles/Five';
import Six from './blogFiles/Six';
import Seven from './blogFiles/Seven';
import Eight from './blogFiles/Eight';
import Nine from './blogFiles/Nine';
import Ten from './blogFiles/Ten';
import Eleven from './blogFiles/Eleven';
import Twelve from './blogFiles/Twelve';


const ShowBlog = (props) => {

    const show = (id) => {
        if(id==0) {
            return <Zero/>
        }
        if(id==0) {
            return <Zero/>
        }if(id==1) {
            return <One/>
        }if(id==2){
            return <Two/>
        }if(id==3) {
            return <Three/>
        }if(id==4) {
            return <Four/>
        }if(id==5) {
            return <Five/>
        }if(id==6) {
            return <Six/>
        }if(id==7) {
            return <Seven/>
        }if(id==8) {
            return <Eight/>
        }if(id==9) {
            return <Nine/>
        }if(id==10) {
            return <Ten/>
        }if(id==11) {
            return <Eleven/>
        }if(id==12) {
            return <Twelve/>
        }
    }

     return (
         <div>
             <Grid align="center" style={{backgroundColor:"#eeefff"}}>
                 <img key={props.blog.id} src={'blogImages'+ props.blog.src} title={props.blog.title} alt={props.blog.title} width="100" height="100"/>
             </Grid>
             <Grid align="center" style={{backgroundColor:"#eeefff"}}>
                 {show(props.blog.id)}
             </Grid>
         </div>
     );
}

export default ShowBlog;