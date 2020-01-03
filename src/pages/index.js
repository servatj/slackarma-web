import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/rockbot.jpg'
import discord from '../assets/images/discord.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="SlacKarma Bot" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>The Slackarma Bot</h2>
                </header>
                <p>
                  The slackarma bot is a minimalistic karma bot that can get commands from slack and add positive or
                  negative karma to your team mate users. Slakarma is a open source bot so you can deploy it in your own
                  servers and configure it to use the express karma API or you can call lambdas to store your data in the
                  database of your choice.
                </p>
                <ul className="actions">
                  <li>
                    <a href="https://github.com/servatj/slackkarma" className="button">
                      Visit github Repo
                    </a>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Slackarma Express API</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>A basic API</h3>
                <p>
                  You can use this express API that stores the data in mongo or you can use your
                  own. You can use stitch, segment or similar to store your collected data for analytics.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="https://github.com/servatj/slackkarma-api" className="button">
                        Visit github Repo
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>How to</h2>
            <p>
              You can follow this guide about how to deploy your slackarma services.
            </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Slackarma Community</h2>
              <p>
                Participate in our community if you like.
                For any doubt or question you can use Teachy Slackarma channel
              </p>
            </header>
            <footer className="major">
              <a href="https://discord.gg/D3jVdD7">
                <img src={discord} alt="discord" />
              </a>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
