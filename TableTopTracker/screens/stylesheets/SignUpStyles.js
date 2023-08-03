import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  parentContainer: {
    height: '100%',
  },
  branding: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    margin: 'auto',
  },
  bgg: {
    color: theme.colors.primary,
    margin: 'auto',
  },
  userInput: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputBox: theme.components.textInput,
  bigGreenButton: theme.components.bigGreenButton,
  bigGreenButtonText: theme.components.bigGreenButtonText,
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenWords: {
    color: theme.colors.primary,
  },
  orangeWords: {
    color: theme.colors.secondary,
  },

});

export default styles;