function AccountNavigation() {
  const navLinks = [
    { text: "Notifications", link: "" },
    { text: "Profile", link: "" },
    { text: "Files", link: "" },
    { text: "Settings", link: "" },
    { text: "ePortfolios", link: "" },
    { text: "Shared Content", link: "" },
    { text: "The Hub", link: "" },
    { text: "Qwickly Course Tools", link: "" },
    { text: "Global Announcements", link: "" },
  ];

  return (
    <div className="list-group list-group-flush">
      {navLinks.map((link) => {
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item`}
        ></Link>;
      })}
    </div>
  );
}
export default AccountNavigation;
