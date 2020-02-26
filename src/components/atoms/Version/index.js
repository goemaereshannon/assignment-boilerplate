import React from 'react'
import PropTypes from 'prop-types'

// Styling
import './version.scss'

const Version = ({ currentVersion }) => (
  <div className="version">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path fill="rgba(255,255,255, .6)" d="M10,0 C15.5128571,0 20,4.48571429 20,10 C20,15.5142857 15.5128571,20 10,20 C4.48714286,20 0,15.5142857 0,10 C0,4.48571429 4.48714286,0 10,0 Z M10,8.57142857 C9.21102179,8.57142857 8.57142857,9.21102179 8.57142857,10 L8.57142857,10 L8.57142857,14.2857143 C8.57142857,15.0746925 9.21102179,15.7142857 10,15.7142857 C10.7889782,15.7142857 11.4285714,15.0746925 11.4285714,14.2857143 L11.4285714,14.2857143 L11.4285714,10 C11.4285714,9.21102179 10.7889782,8.57142857 10,8.57142857 Z M11.0101429,4.70414286 C10.4522571,4.14625143 9.54773429,4.14625143 8.98984286,4.70414286 C8.43195143,5.26202857 8.43195143,6.16655143 8.98984286,6.72444286 C9.54772857,7.28233429 10.4522514,7.28233429 11.0101429,6.72444286 C11.5680343,6.16655714 11.5680343,5.26203429 11.0101429,4.70414286 Z" />
    </svg>

    <span>{currentVersion}</span>
  </div>
)

Version.propTypes = {
  currentVersion: PropTypes.string
}

export default Version