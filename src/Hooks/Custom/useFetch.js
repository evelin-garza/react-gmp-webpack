import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, ref, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const mockedFetchCall = useCallback(() => {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(url);
                }, 2000);
            } catch (e) {
                reject(e);
            }
        });
    }, [url]);

    useEffect(() => {
        if (ref.current) {
            (async () => {
                try {
                    const response = await mockedFetchCall();
                    setData(response);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            })();
        }
        return () => {
            ref.current = false;
        };
    }, [url, ref]);

    return { loading, data, error };
};