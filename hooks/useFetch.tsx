import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '@/utils/url';

export const useQueryFetch = (url: any) => {

    const { data: fetchedData, refetch } = useQuery({[url], () =>

        fetch(BASE_URL + url).then(res =>
            res.json()
        )
}
    )

    return { fetchedData: fetchedData, refetch }

}