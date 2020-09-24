import React from 'react';
import Aux from '../../hoc/Auxi';
import { Link } from 'react-router-dom';
import './sidenavbar.css';
import {
  Home,
  RefreshCcw,
  FileText,
  Upload,
  List,
  UserMinus
} from 'react-feather';

const navigation = [
  {
    name: 'Home',
    label: 'Home',
    icon: <Home />,
    disable: true,
    style: 'mainsidebarheading'
  },
  {
    url: '/ap_conversion',
    name: 'Convert AP to ID',
    label: 'Convert AP to ID',
    icon: <RefreshCcw color='#BEBEBE' size={20} />,
    style: 'sidebarlink'
  },
  {
    url: '/remove_student',
    name: 'Removal of Student',
    label: 'Removal of Student',
    icon: <UserMinus color='#BEBEBE' size={20} />,
    style: 'sidebarlink'
  },
  {
    name: 'Extraction and Report',
    label: 'Extraction and Report',
    style: 'mainsidebarheading',
    disable: true
  },
  {
    url: '/Streams',
    name: 'Stream List',
    label: 'Stream List',
    icon: <List color='#BEBEBE' size={20} />,
    style: 'sidebarlink'
  },
  {
    url: '/Register',
    name: 'Register',
    label: 'Register',
    icon: <FileText color='#BEBEBE' size={20} />,
    style: 'sidebarlink'
  },
  {
    name: 'Spreadsheet',
    label: 'Spreadsheet',
    style: 'mainsidebarheading',
    disable: true
  },
  {
    url: '/spreadsheet',
    name: 'Load/Wipe Spreadsheet',
    label: 'Load/Wipe Spreadsheet',
    icon: <Upload color='#BEBEBE' size={20} />,
    style: 'sidebarlink'
  },
  {
    name: 'Reports',
    label: 'Reports',
    style: 'mainsidebarheading',
    disable: true
  },
  {
    url: '/Report',
    name: 'Lab and Class Capacity',
    label: 'Lab and Class Capacity',
    icon: <FileText color='#BEBEBE' size={20} />,
    style: 'sidebarlink'
  },
  {
    url: '/Warnings',
    name: 'Students with Warnings',
    label: 'Students with Warnings',
    icon: <FileText color='#BEBEBE' size={20} />,
    style: 'sidebarlink'
  }
];

const sidenavbar = (props) => {
  return (
    <Aux>
      <nav className='bg-light'>
        <div className='sidebar-sticky'>
          <ul className='nav flex-column'>
            {navigation.map((value, index) => {
              return (
                <li className='nav-item' key={index}>
                  <Link
                    className='nav-link'
                    to={`${props.url}${navigation[index].url}`}
                    onClick={props.getUrl(
                      `${props.url}${navigation[index].url}`
                    )}
                  >
                    {navigation[index].icon}
                    <span className={navigation[index].style}>
                      {navigation[index].label}{' '}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Aux>
  );
};
export default sidenavbar;
