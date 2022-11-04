import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton
} from '@backstage/core-components';
import {EntityAboutCard} from "@backstage/plugin-catalog"

export const ProductComponent = () => (
  <Content>
    <ContentHeader title="Plugin title">
      <SupportButton>A description of your plugin goes here.</SupportButton>
    </ContentHeader>
    <Grid container spacing={3} direction="column">
      <Grid item>
        <InfoCard title="Information card">
          <Typography variant="body1">
            All content should be wrapped in a card like this.
          </Typography>
        </InfoCard>
      </Grid>
      <Grid item spacing={3}>
        <EntityAboutCard variant="gridItem" />
      </Grid>
    </Grid>
  </Content>
);
