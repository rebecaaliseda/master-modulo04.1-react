export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const getMembers = async (organization: string, page: number): Promise<MemberEntity[]> => {
  const response = await fetch(
    `https://api.github.com/orgs/${organization}/members?per_page=8&page=${page}`,
  );

  return response.json();
};
