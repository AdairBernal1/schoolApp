import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';

const uri = 'https://cecssin-graphql.hasura.app/v1/graphql';
const authHeader = new HttpHeaders()
.set('ContentType', 'application/json')
.set('x-hasura-admin-secret', 'ICvXwrYj76OzUXfRiIdZ3ms3oxUVs0Pv46l07A9d9XsKVTOy6yrVOVp6smWcFqLB')

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri, headers: authHeader}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
