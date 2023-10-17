import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetailPage = () => {
    const parama=useParams();
  return (
    <div>
      <h1>My EventDetail Page</h1>
      <p><strong>EventID:</strong> {parama.eventId}</p>

    </div>
  )
}

export default EventDetailPage
