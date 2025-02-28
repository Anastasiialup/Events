import { gql, MutationResult, useMutation } from '@apollo/client';
import { MutationReturnType } from '../../types/common.types';
import { User, UserInput } from '../../../generated/graphql.types';

const CREATE_USER = gql`
 mutation CreateUser($createUserInput: UserInput!) {
  createUser(createUserInput: $createUserInput) {
    name
    email
    password
  }
}
`;

type ResultType = {
  createUser: User;
};

type UseCreateDish = [
  (
    dish: Partial<User>,
  ) => Promise<MutationReturnType<User>>,
  MutationResult<ResultType>,
];

const useCreateUser = (): [((user: UserInput) => Promise<{
  data: User | null;
  error: null
}>), MutationResult<ResultType>] => {
  const [createUser, state] = useMutation<ResultType>(CREATE_USER);

  const executeMutation = async (user: UserInput) => {
    const { data } = await createUser({
      variables: {
        createUserInput: user,
      },
    });

    return { data: data?.createUser || null, error: null };
  };



  return [executeMutation, state];
};

export default useCreateUser;
