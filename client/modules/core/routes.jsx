import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Start from './containers/start';
import DateOfBirth from './containers/date_of_birth';
import SelectTeam from './containers/select_team';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/start', {
    name: 'start',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Start />)
      });
    }
  });
  FlowRouter.route('/date-of-birth', {
    name: 'date-of-birth',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<DateOfBirth />)
      });
    }
  });

  FlowRouter.route('/select-team', {
    name: 'select-team',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<SelectTeam />)
      });
    }
  });
}
