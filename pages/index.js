import React, { PureComponent } from 'react'
import Page from '~/components/layouts/Landing'

class Home extends PureComponent {
  render() {
    return (
      <Page id="Home">
        <div id="Teaser" className="section has-shadow">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8 has-text-centered">
                <h3 className="title is-3 m-b-sm">Use a Google Sheet as your database.</h3>
                <p className="is-size-5 m-b-lg">
                  SheetMetal lets you interact with any Google spreadsheet via a RESTful API.
                </p>

                <div id="Video">
                  <p>Video here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="has-text-centered">
          <a href="" className="button is-primary is-medium has-text-weight-bold is-rounded has-shadow">
            <span>Start now</span>
            <span className="icon">
              <i className="fas fa-arrow-right" />
            </span>
          </a>
        </div>
        {/* How it works */}
        <div className="section container m-b-lg">
          <h5 className="title is-3">Use Cases</h5>
          <hr className="m-t-none" style={{ maxWidth: '100px' }} />
          <div className="columns">
            <div className="column ">
              <div className="box">
                <div className="">
                  <img src="/static/img/use-prototype.png" alt="Use for prototyping" width="50" />
                </div>
                <h5 className="title is-5 m-b-sm">Prototyping</h5>
                <p>Use a Google Sheet as a quick and dirty prototyping database.</p>
              </div>
            </div>
            <div className="column ">
              <div className="box">
                <div className="">
                  <img src="/static/img/use-crm.png" alt="Use as CRM" width="50" />
                </div>
                <h5 className="title is-5 m-b-sm">Custom forms</h5>
                <p>Put a custom form on your website and collect leads and responses.</p>
              </div>
            </div>
            <div className="column ">
              <div className="box">
                <div className="">
                  <img src="/static/img/use-mobile.png" alt="Use for mobile" width="50" />
                </div>
                <h5 className="title is-5 m-b-sm">Mobile development</h5>
                <p>Deploy a mobile app without deploying any other background infrastructure.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="section container m-b-lg">
          <h5 className="title is-3">How it Works</h5>
          <hr className="m-t-none" style={{ maxWidth: '100px' }} />
          <div className="columns">
            <div className="column">
              <div className="title is-1">1.</div>
              <h5 className="title is-5 m-b-sm">Create a Google Sheet</h5>
              <p>
                Create a Google Sheet which you can use as a database. Every tab within the sheet
                can represent a database table.
              </p>
            </div>
            <div className="column">
              <div className="title is-1">2.</div>
              <h5 className="title is-5 m-b-sm">Connect SheetMetal</h5>
              <p>Login to SheetMetal in just 2 clicks to allow access to your Google Sheets.</p>
            </div>
            <div className="column">
              <div className="title is-1">3.</div>
              <h5 className="title is-5 m-b-sm">Use your Sheet like a database</h5>
              <p>
                SheetMetal gives you full access to interact with your spreadsheet via a RESTful
                API.
              </p>
            </div>
          </div>
        </div>

        {/* TODO. Ship first */}
        {/* <div className="section container">Code Demo</div> */}

        <div className="section container m-b-lg">
          <a name="pricing" id="pricing" />
          <h5 className="title is-3 ">Pricing</h5>
          <hr className="m-t-none" style={{ maxWidth: '100px' }} />
          <div className="columns has-text-centered">
            <div className="column">
              <a className="box">
                <div className="title is-3">Self hosted</div>
                <ul>
                  <li>Unlimited API calls</li>
                  <li>Unlimited API keys</li>
                </ul>
              </a>
            </div>
            <div className="column">
              <a className="box">
                <div className="title is-3">Free</div>
                <ul>
                  <li>30 API calls per day</li>
                  <li>One API key</li>
                </ul>
              </a>
            </div>
            <div className="column">
              <a className="box">
                <div className="title is-3">$5/month</div>
                <ul>
                  <li>Unlimited API calls</li>
                  <li>Unlimited API keys</li>
                </ul>
              </a>
            </div>
          </div>
        </div>

        <div className="section has-background-dark">
          <div className="container ">
            <div className="columns is-mobile">
              <div
                className="column"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
              >
                <strong className="is-size-4 has-text-white m-r-md">Try SheetMetal for free</strong>
                <button className="button is-medium is-primary has-text-weight-bold is-rounded">
                  <span>Go</span>
                  <span className="icon">
                    <i className="fas fa-arrow-right" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default Home
