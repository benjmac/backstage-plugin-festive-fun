import React from 'react';
import { InfoCard } from '@backstage/core-components';
import {
  List,
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
} from '@material-ui/core';
import useLocalStorage from 'react-use/lib/useLocalStorage';

export function FestiveFunSettings() {
  const [value, setValue] = useLocalStorage<'on' | 'off'>(
    'advanced-option',
    'off',
  );

  const toggleValue = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.currentTarget.checked ? 'on' : 'off');
  };

  return (
    <Grid container direction="row" spacing={3}>
      <Grid item xs={12} md={6}>
        <InfoCard title="Advanced settings" variant="gridItem">
          <List>
            <ListItem>
              <ListItemText
                primary="Advanced user option"
                secondary="An extra settings tab to further customize the experience"
              />
              <ListItemSecondaryAction>
                <Switch
                  color="primary"
                  value={value}
                  onChange={toggleValue}
                  name="advanced"
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </InfoCard>
      </Grid>
    </Grid>
  );
}
