const LeftNav = () =>{
   const currentMenu = window.location.pathname;
   const headerToken = localStorage.getItem("token");
   if(!headerToken){
   window.location = "/admin";
   }
    return(
        <>
        <div className="navWrapper">
        <ul>
            <li className={currentMenu.includes("dashboard") &&  'active'}><a href="/admin/dashboard">Dashboard</a></li>
            <li className={currentMenu.includes("blog") &&  'active'}><a href="/admin/blog">Blog</a></li>
            <li className={currentMenu.includes("event-list") &&  'active'}><a href="/admin/event-list">Event List</a></li>
        </ul>
        </div>
        </>
    )
}

export default LeftNav;