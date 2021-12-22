import { useQuery, gql } from "@apollo/client";

export const DELEGATORS_ANALYTICS = gql`
     query delegators(
      $orderBy: Delegator_orderBy
      $orderDirection: OrderDirection
      $first: Int
      $skip: Int
      $filter: Delegator_filter
    ) @analytics {
        delegators(
          orderBy: $orderBy
          orderDirection: $orderDirection
          first: $first
          skip: $skip
          where: $filter
        ) {
          id
          account {
              id
              image
              defaultName {
              id
              name
              }
          }
          activeStakesCount
          stakes {
              id
              indexer {
              id
              account {
                  id
                  image
                  defaultName {
                  id
                  name
                  }
              }
              }
          }
          stakesCount
          stakedTokens
          totalRealizedRewards
          totalUnrealizedRewards
          originalDelegation
          currentDelegation
          lastDelegatedAt
        }
    } 
`;

export const DELEGATOR_SEARCH = gql`
    
  query delegatorSearch(
    $text: String!
    $orderBy: Delegator_orderBy
    $orderDirection: OrderDirection
    $first: Int
    $skip: Int
    $filter: Delegator_filter
  ) @analytics {
    delegatorSearch(
      text: $text
      orderBy: $orderBy
      orderDirection: $orderDirection
      first: $first
      skip: $skip
      where: $filter
    ) {
      id
      account {
        id
        image
        defaultName {
          id
          name
        }
      }
      stakes {
        id
        indexer {
          id
          account {
            id
            image
            defaultName {
              id
              name
            }
          }
        }
      }
      stakesCount
      stakedTokens
      totalRealizedRewards
      totalUnrealizedRewards
      originalDelegation
      currentDelegation
      lastDelegatedAt
    }
  }

`;

export const GRAPH_NETWORK = gql`
    query GraphNetwork(
        $orderBy: GraphNetworkDailyData_orderBy
        $orderDirection: OrderDirection
    ) @analytics {
          graphNetworkDailyDatas(
          orderBy: $orderBy
          orderDirection: $orderDirection
          first: 1000
        ) {
            id
            dayEnd
            dayStart
            dayNumber
            totalQueryFees
            totalTokensSignalled
          }
    }
 
`;

export const SUBGRAPH_DAILY = gql`
  query subgraphDaily(
    $id: ID!
    $orderBy: SubgraphDeploymentDailyData_orderBy
    $orderDirection: OrderDirection
  ) @analytics {
    subgraphDeploymentDailyDatas(
      where: { subgraphDeployment: $id }
      orderBy: $orderBy
      orderDirection: $orderDirection
      first: 1000
    ) {
      id
      dayNumber
      dayStart
      dayEnd
      queryFeesAmount
      signalledTokens
    }
  }
`;

export const DELEGATOR_DAILY_DATA = gql`
  query DelegatorDailyData(
      $id: ID!
      $orderBy: DelegatorDailyData_orderBy
      $orderDirection: OrderDirection
      $first: Int!
    ) @analytics {
      delegatorDailyDatas(
        where: { delegator: $id }
        orderBy: $orderBy
        orderDirection: $orderDirection
        first: $first
      ) {
        id
        dayStart
        dayEnd
        dayNumber
        stakedTokens
        lockedTokens
        totalUnrealizedRewards
        totalRealizedRewards
        stakesCount
        currentDelegation
      }
    }
`;

export const PROFILE_OVERVIEW = gql`
  query ProfileOverview($id: ID!, $cutoffDate: Int!) @analytics {
    indexerDailyDatas(
      first: 30
      where: { indexer: $id, dayEnd_gte: $cutoffDate }
      orderBy: dayStart
      orderDirection: desc
    ) {
      id
      indexerIndexingRewards
      queryFeeRebates
    }
    delegatorDailyDatas(
      first: 30
      where: { delegator: $id, dayEnd_gte: $cutoffDate }
      orderBy: dayStart
      orderDirection: desc
    ) {
      id
      totalRealizedRewards
      totalUnrealizedRewards
    }
  }
`;

export const INDEXER_DELEGATORS_COUNT = gql`
  query indexer($id: ID!) @analytics {
    indexer(id: $id) {
      id
      delegatorsCount
    }
  }
`;

export const INDEXER_QUERY = gql`
  query indexer(
      $first: Int!
      $skip: Int!
      $orderBy: DelegatedStake_orderBy!
      $orderDirection: OrderDirection!
      $filter: DelegatedStake_filter!
    ) @analytics {
      delegatedStakes(
        first: $first
        skip: $skip
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $filter
      ) {
        id
        originalDelegation
        unrealizedRewards
        currentDelegation
        realizedRewards
        lastDelegatedAt
        lastUndelegatedAt
        delegator {
          account {
            id
            defaultName {
              name
            }
            image
          }
        }
      }
    }
`;

export const PROFILE_OVERVIEW = gql`
  query ProfileOverview($id: ID!, $cutoffDate: Int!) @analytics {
    indexerDailyDatas(
      first: 30
      where: { indexer: $id, dayEnd_gte: $cutoffDate }
      orderBy: dayStart
      orderDirection: desc
    ) {
      id
      indexerIndexingRewards
      queryFeeRebates
    }
    delegatorDailyDatas(
      first: 30
      where: { delegator: $id, dayEnd_gte: $cutoffDate }
      orderBy: dayStart
      orderDirection: desc
    ) {
      id
      totalRealizedRewards
      totalUnrealizedRewards
    }
  }
`;

export const DELEGATOR_DAILY = gql`
  query DelegatorDailyData(
      $id: ID!
      $orderBy: DelegatorDailyData_orderBy
      $orderDirection: OrderDirection
      $first: Int!
    ) @analytics {
      delegatorDailyDatas(
        where: { delegator: $id }
        orderBy: $orderBy
        orderDirection: $orderDirection
        first: $first
      ) {
        id
        dayStart
        dayEnd
        dayNumber
        stakedTokens
        lockedTokens
        totalUnrealizedRewards
        totalRealizedRewards
        stakesCount
        currentDelegation
      }
    }
`;

export const INDEXER_DAILY = gql`
  query indexerDaily(
      $id: ID!
      $orderBy: IndexerDailyData_orderBy
      $orderDirection: OrderDirection
    ) @analytics {
      indexerDailyDatas(
        where: { indexer: $id }
        orderBy: $orderBy
        orderDirection: $orderDirection
        first: 1000
      ) {
        id
        stakedTokens
        delegatedTokens
        allocatedTokens
        availableStake
        dayNumber
        dayStart
        dayEnd
        totalIndexingRewards
        indexerIndexingRewards
        delegatorIndexingRewards
        queryFeesCollected
        queryFeeRebates
        delegatorQueryFees
      }
    }
`;
