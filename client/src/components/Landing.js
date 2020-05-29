import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/userContext'
import { Jumbotron, Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSpring, animated } from 'react-spring'


const Landing = () => {
  const { user } = useContext(UserContext)
  const [communities, setCommunities] = useState(null)

  const fadeInLeft = useSpring({
    from: {
      opacity:0,
      marginTop: '-150px'
    },
    opacity: 1,
    color:'white',
    marginTop:'0px'
  })

  const fadeInUp = useSpring({
    from: {
      opacity:0,
      marginTop: '150px'
    },
    opacity: 1,
    marginTop:'0px'
  })




  useEffect(() => {
    const getCommunities = async () => {
      if (user) {
        const req = await fetch(`/communitiesByUser/${user.id}`)
        const list = await req.json()
        return list
      }
    }
    getCommunities()
      .then((list) => { setCommunities(list) })
  }, [user])


  const JumbotronStyle = {
    background: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v211batch11-aum-561-cummunity_2.jpg?w=1200&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f0977b16acfb162ea9b439acec79e19e")',
    backgroundPosition: 'center 35%',
    backgroundSize: 'cover',
    height: '350px',
    borderRadius: '0px'
  }

  return (
    <div>
      <Jumbotron style={JumbotronStyle}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', border: '7px solid white', padding: '15px' }}>
            <animated.div style={fadeInLeft}>
              <h1>Welcome to Safespace</h1>
            </animated.div>
            <p style={{ color: 'white' }}>
              <span className="text-wrapper">
                This is a safe space for anyone to create a community around their personal experiences, whatever that may be.
              </span>
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LinkContainer to='/register' style={{ marginTop: '18px' }}>
            <Button className='marvel-btn'>Create An Account</Button>
          </LinkContainer>
        </div>
      </Jumbotron>
      <animated.div style={fadeInUp}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card style={{ border: '0px', width: '75%' }} className='text-center'>
            <Card.Body>
              <Card.Title>Create Your Own Community</Card.Title>
              <Card.Text>

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam

              </Card.Text>
              <LinkContainer to='/spaces'>
                <Button variant='primary'>Browse Communities</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </div>
      </animated.div>
      <animated.div style={fadeInUp}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ border: '0px', width: '75%' }} className='text-center'>
          <Card.Body>
            <Card.Title>Find Mentorship</Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
            <Button variant='primary'>Find a Mentor</Button>
          </Card.Body>
        </Card>
      </div>
      </animated.div>
      <animated.div style={fadeInUp}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ border: '0px', width: '75%' }} className='text-center'>
          <Card.Body>
            <Card.Title>Tell Your Story</Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
            <Button variant='primary'>Tell Your Story</Button>
          </Card.Body>
        </Card>
      </div>
      </animated.div>
    </div>
  )
}

export default Landing
