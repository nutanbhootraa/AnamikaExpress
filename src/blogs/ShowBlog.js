import React from 'react';
import Grid from '@material-ui/core/Grid';

const ShowBlog = (props) => {
     return (
         <div>
             <Grid align="center" style={{backgroundColor:"#eeeeee"}}>
                 <img key={props.blog.id} src={'blogImages'+ props.blog.src} title={props.blog.title} alt={props.blog.title} width="200" height="200"/>
             </Grid>
             <Grid align="center" style={{backgroundColor:"#eeeeee"}}>
                 {props.blog.show}
             </Grid>
         </div>
     );
}

export default ShowBlog;