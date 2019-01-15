import React from 'react';

const formatConnectName = (
  contextName
) => `connect${contextName.charAt(0).toUpperCase()}${contextName.slice(1)}`
const formatProviderName = (
  contextName
) => `${contextName.charAt(0).toUpperCase()}${contextName.slice(1)}Provider`

const create = (contexts) => {
  let Providers = {}
  let connectors = {}
  contexts.forEach(context => {
    let {Provider, Consumer} = React.createContext(context);
    Providers[formatProviderName(context)] = Provider;
    connectors[formatConnectName(context)] = (
      mapStateToProps, mapDispatchToProps
    ) => Target => props => (
      <Consumer>
        {store => (
          <Target
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
            {...props}
          />)}
      </Consumer>
    )
  })
  return {Providers, connectors}
};
const contexts = [
  'app'
];
const Contexts = create(contexts);

export const Providers = Contexts.Providers;
export const connectors = Contexts.connectors;
