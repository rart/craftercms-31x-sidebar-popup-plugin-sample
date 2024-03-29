import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Menu, MenuItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { util, rxjs } from '@craftercms/studio';

const { operators: { pluck } } = rxjs;

export default function ItemsList(props) {
  const { onItemActionClick } = props;
  const [items, setItems] = useState();
  const [menu, setMenu] = useState();
  useEffect(() => {
    util.ajax.get(
      `/studio/api/1/services/api/1/content/get-items-tree.json?site=31x-sidebar-plugin&path=/site/website&depth=1&order=default`
    ).pipe(pluck('response', 'item', 'children')).subscribe(setItems)
  }, []);
  const handleMenuClose = () => setMenu(null);
  const handleEdit = () => {
    const item = menu.item;
    handleMenuClose();
    onItemActionClick?.(item);
    CStudioAuthoring.Operations.editContent(
      item.contentType,
      CStudioAuthoringContext.site,
      `${item.path}/${item.name}`,
      null,
      `${item.path}/${item.name}`,
      false,
      {
        success() {
          console.log('Save completed successfully.');
        },
        failure() {
          console.log('Save failed.');
        },
        callingWindow: window
      }
    )
  };
  const handlePublish = () => {
    const item = menu.item;
    handleMenuClose();
    onItemActionClick?.(item);
    CStudioAuthoring.Operations.approveCommon(CStudioAuthoringContext.site, [item], false);
  };
  const handleSubmit = () => {
    const item = menu.item;
    handleMenuClose();
    onItemActionClick?.(item);
    CStudioAuthoring.Operations.submitContent(CStudioAuthoringContext.site, [item]);
  };
  return (
    <List>
      {items?.map(item => (
        <ListItem key={`${item.path}/${item.name}`}>
          <ListItemText
            primary={item.internalName || item.name}
            secondary={`${item.path}/${item.name}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Options" onClick={(e) => setMenu({ item, anchor: e.currentTarget })}>
              <MoreVertRounded />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <Menu open={Boolean(menu)} anchorEl={menu?.anchor} onClose={handleMenuClose}>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handlePublish}>Publish (approver, admin)</MenuItem>
        <MenuItem onClick={handleSubmit}>Submit (author)</MenuItem>
      </Menu>
    </List>
  );
}
