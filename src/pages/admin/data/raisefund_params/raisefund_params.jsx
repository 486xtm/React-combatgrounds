import React, { useEffect, useState } from 'react';
import { getRaiseFundParams, updateRaiseFundParams } from '../../../../api/user';
import { useDispatch, useSelector } from 'react-redux';

export const RaiseFundParams = () => {
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState([]);

  const raisefundParams = useSelector(({ user }) => user.raisefundParams);

  const dispatch = useDispatch();

  const handleChange = async (p) => {
    setLoading(true);
    try {
      await updateRaiseFundParams(p, dispatch);
      setLoading(false);
    } catch (err) {
      console.log('something went wrong: ', err);
    }
  }

  useEffect(() => {
    getRaiseFundParams(dispatch);
  }, []);

  useEffect(() => {
    setParams(raisefundParams);
  }, [raisefundParams]);

  return (
    <div className="w-full h-full flex flex-col gap-5">
      {params && params.map((p, idx) => (
        <div className="flex items-center bg-white px-5 py-7 rounded-lg" key={idx}>
          <span className="text-xl font-bold w-[300px]">{p.title}</span>
          <input
            className="border border-gray-400 rounded p-1 ml-2"
            value={Number(p.value || 0).toLocaleString('en-US')} // Controlled input
            onChange={(e) => {
              setParams(params.map((v) => {
                if (v._id !== p._id) {
                  return v;
                }
                console.log(e.target.value, '->', e.target.value.replace(/[^0-9.]/g, ""))
                return { ...v, value: Number(e.target.value.replace(/[^0-9.]/g, "") || 0) }
              }))
            }}
          />
          <button
            className="bg-[#014CFA] rounded-lg py-2 px-5 ml-auto text-white shadow-lg hover:bg-blue-500 mt-2"
            onClick={() => handleChange(p)}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>))}
    </div>
  )
}