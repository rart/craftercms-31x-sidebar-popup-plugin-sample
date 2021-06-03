/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  makeStyles
} from '@material-ui/core';
import { components } from '@craftercms/studio';
import ItemsList from './ItemsList';

const { CrafterCMSNextBridge } = components;

const useStyles = makeStyles((theme) => ({
  // '@global': {
  //   // May add any global styles here...
  // },
  root: {
    marginBottom: theme.spacing(2)
  }
}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <CrafterCMSNextBridge>
      <div className={classes.root}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => setOpen(true)}
        >Open popup</Button>
        <Dialog
          open={open}
          fullWidth
          maxWidth="sm"
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Select an option</DialogTitle>
          <DialogContent>
            <ItemsList onItemActionClick={() => setOpen(false)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Done</Button>
          </DialogActions>
        </Dialog>
      </div>
    </CrafterCMSNextBridge>
  );
}
