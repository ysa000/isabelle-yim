import React from 'react'
import { relative } from 'path'

class PickOfTheDay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      isLoading: false,
      error: new Error('boohhoooooooooo'),
    }
  }

  const

  getData() {
    this.setState({ isLoading: true })
    const randomNumber = Math.floor(Math.random() * 40000) + 1
    // const api_url = `https://api.tvmaze.com/shows/${randomNumber}`
    const api_url = `http://quotes.rest/qod.json`
    fetch(api_url)
      .then(response => response.json())
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { data, isLoading, error } = this.state
    if (isLoading) {
      return <div>Loading</div>
    }
    if (error) {
      return error.message
    }
    console.log('dataName === ', data)
    return <div>{data && data.contents.quotes[0].quote}</div>
  }
}

export default PickOfTheDay
