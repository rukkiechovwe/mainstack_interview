import Icons from "../../assets/icons";
import { NavItemsProp } from "../../utils/types";
import "./index.css";

const navitems: NavItemsProp[] = [
  {
    title: "",
    items: [
      {
        item: "Dashboard",
        icon: Icons.ic_dashboard,
        active: true,
      },
      {
        item: "Item 1",
        icon: Icons.ic_edit,
        active: false,
      },
      {
        item: "Item 2",
        icon: Icons.ic_group,
        active: false,
      },
      {
        item: "Item 3",
        icon: Icons.ic_hourglass_empty,
        active: false,
      },
    ],
  },
  {
    title: "Others 1",
    items: [
      {
        item: "Item 4",
        icon: Icons.ic_photo,
        active: false,
      },
      {
        item: "Item 5",
        icon: Icons.ic_delete,
        active: false,
      },
    ],
  },
  {
    title: "Others 2",
    items: [
      {
        item: "Item 6",
        icon: Icons.ic_subscription,
        active: false,
      },
      {
        item: "Item 7",
        icon: Icons.ic_file,
        active: false,
      },
      {
        item: "Item 8",
        icon: Icons.ic_alarm,
        active: false,
      },
    ],
  },
];

const NavItem = ({
  icon,
  item,
  active,
}: {
  icon: string;
  item: string;
  active: boolean;
}) => {
  return (
    <li className="nav_item ">
      <img src={icon} alt="" />
      <span className={active ? "active" : ""}>{item}</span>
    </li>
  );
};

const SideNav = () => {
  return (
    <nav className="side_nav">
      <div className="nav_wrapper">
        <img src={Icons.ic_logo} alt="" width={40} height={40} />

        {navitems.map((group) => (
          <div key={group.title}>
            <p className="group_title">{group.title}</p>
            <ul className="nav_items">
              {group.items.map((items) => (
                <NavItem
                  key={items.item}
                  item={items.item}
                  icon={items.icon}
                  active={items.active}
                />
              ))}
            </ul>
          </div>
        ))}

        <div className="user_info_wrapper">
          <div className="user_info">
            <img src={Icons.ic_image} alt="" width={32} height={32} />
            <p>Blessing Daniels</p>
          </div>
          <img src={Icons.ic_more} alt="" width={20} height={20} />
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
