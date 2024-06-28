import { IconBadge } from '@douyinfe/semi-icons-lab';
import { Nav } from '@douyinfe/semi-ui';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';



export default function Navigation(props = {}) {

  const { t, i18n } = useTranslation();

  const MenuLists = [
    {
      itemKey: 'dashboard',
      text   : t('component_navigation.dashboard'),
      icon   : <IconBadge />,
      items  : [
        {
          itemKey: 'dashboard_overview',
          text   : t('component_navigation.dashboard_overview'),
        },
        {
          itemKey: 'dashboard_single',
          text   : t('component_navigation.dashboard_single'),
        }
      ]
    }
  ]

  const [openKeys, setOpenKeys]         = useState(['union-management', 'job']);
  const [selectedKeys, setSelectedKeys] = useState(['公告设置']);
  const [isCollapsed, setIsCollapsed]   = useState(false);

  const onSelect = data => {
    console.log('trigger onSelect: ', data);
    setSelectedKeys([...data.selectedKeys]);
  };
  const onOpenChange = data => {
    console.log('trigger onOpenChange: ', data);
    setOpenKeys([...data.openKeys]);
  };

  const onCollapseChange = isCollapsed => {
    setIsCollapsed(isCollapsed);
  };

  const items = useMemo(() => MenuLists, [t]);

  const routerMap = {
    dashboard         : "/dashboard",
    dashboard_overview: "/dashboard/overview",
    dashboard_sigle   : "/dashboard/single",
    "Nothing Here"    : "/nothing-here"
  };

  return (
    <Nav
      style            = {{ height: '100%' }}
      isCollapsed      = {isCollapsed}
      openKeys         = {openKeys}
      selectedKeys     = {selectedKeys}
      bodyStyle        = {{ height: 360 }}
      items            = {items}
      footer           = {{ collapseButton: true }}
      onCollapseChange = {onCollapseChange}
      onOpenChange     = {onOpenChange}
      onSelect         = {onSelect}
      renderWrapper    = {({ itemElement, isSubNav, isInSubNav, props }) => {
        const itemStyle = {
          padding: '0px 0px',   // 增加内边距
          margin : '5px 0',     // 增加外边距
          display: 'block',
        };
        return (
          <Link
            style = {{ textDecoration: "none" }}
            to    = {routerMap[props.itemKey]}
          >
            <div style = {itemStyle}>{itemElement}</div>
          </Link>
        );
      }}
    />
  );
}
