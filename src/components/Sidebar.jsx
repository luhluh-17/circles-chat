import React from 'react'

function Sidebar() {
  return (
    <aside className='sidebar'>
      <header className='sidebar-header'>
        <h4 className='sidebar-header-title'>Channels</h4>
        <div className='sidebar-btns'>
          <span class='material-symbols-outlined btn-icon'>more_vert</span>
          <span class='material-symbols-outlined btn-icon'>add</span>
        </div>
      </header>
    </aside>
  )
}

export default Sidebar
