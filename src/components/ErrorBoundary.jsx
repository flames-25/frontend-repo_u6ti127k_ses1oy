import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // Optional: send to telemetry service
    // console.error('Spline error:', error, info)
  }

  render() {
    const { hasError } = this.state
    const { fallback = null, children } = this.props

    if (hasError) return fallback
    return children
  }
}
