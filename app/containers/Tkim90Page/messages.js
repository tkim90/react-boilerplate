/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Tkim90Page';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'About Me - Tae Kim',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      "Hello, my name is Tae. I'm a Full Stack Engineer based in San Francisco, CA.",
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: "Tae's Repos",
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
