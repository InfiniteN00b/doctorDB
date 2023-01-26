import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import DiagPDetail  from '../DiagPDetail';
import AuthContext from '../AuthContext';

function TopPost(props) {
  const { post } = props;
  const [open, setOpen] = React.useState(false);
  const authContext = React.useContext(AuthContext);

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h5" variant="h5" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h2" color="inherit" sx={{fontFamily : "monospace"}}>
              {post.subtitle}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph sx = {{fontFamily : "inherit" , fontSize : 20}}>
              {post.description}
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
            <Button variant="contained" color="primary" onClick={() => (authContext.logged == 1) ? setOpen(true) : window.location = "./login"}>
              Get Started  
              <RestartAltRoundedIcon sx = {{margin : 0.5 }}/>
            </Button>
            {open && <DiagPDetail open={open} setOpen={setOpen} user={authContext.user}/>}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

TopPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TopPost;