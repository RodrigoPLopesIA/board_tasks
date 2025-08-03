import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react'

function dashboard() {
  return (
    <div>dashboard</div>
  )
}

export default dashboard


export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};