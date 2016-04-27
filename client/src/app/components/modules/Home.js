import React from 'react';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import {cyan500, darkWhite} from 'material-ui/styles/colors';

import FullWidthSection from '../FullWidthSection';

class HomePage extends React.Component {

  homePageHero() {
    const styles = {
      root: {
        backgroundColor: cyan500,
        overflow: 'hidden',
      },
      tagLine: {
        margin: '16px auto 0 auto',
        textAlign: 'center',
        maxWidth: 575
      },
      h1: {
        color: darkWhite,
        fontWeight: typography.fontWeightLight,
      },
    }
   
    return (
      <div>
        <FullWidthSection style={styles.root}>
          <div style={styles.tagLine}>
            <h1 style={styles.h1}>WorkFlow</h1>
          </div>
        </FullWidthSection>
      </div>
    )
  }

  render() {
    const style = {
      paddingTop: spacing.desktopKeylineIncrement
    }

    return (
      <div style={style}>
        {this.homePageHero()}
      </div>
    )
  }
}

HomePage.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default HomePage;
