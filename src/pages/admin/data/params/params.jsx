import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addParams, getAllParams, removeParams, updateParams } from '../../../../api/battlefield';
import { FaPen, FaTrashCan } from 'react-icons/fa6';
// import styles from './params.module.css';

export const Params = () => {
  const [operationType, setOperationType] = useState(0);
  const [regionType, setRegionType] = useState(0);
  const [minReward, setMinReward] = useState(0);
  const [maxReward, setMaxReward] = useState(0);
  // const [recruitsLimit, setRecruitsLimit] = useState(0);
  const [vals, setVals] = useState([]);
  const dispatch = useDispatch();

  const params = useSelector(({ battleField }) => battleField.params);

  useEffect(() => {
    getAllParams(dispatch);
  }, []);

  useEffect(() => {
    if (!params) return;
    setVals(params);
  }, [params]);

  const handleAddClicked = () => {
    addParams({ operationType, regionType, minReward, maxReward }, dispatch);
    // addParams({ operationType, regionType, minReward, maxReward, recruitsLimit }, dispatch);
    setOperationType(0);
    setRegionType(0);
    setMinReward(0);
    setMaxReward(0);
    // setRecruitsLimit(0);
  }

  const handleEdit = (v) => {
    console.log('v===>', v);
    updateParams(v, dispatch);
  }

  const handleDelete = (v) => {
    removeParams({ param_id: v._id }, dispatch);
  }

  useEffect(() => {
    console.log('vals===>', vals);
  }, [vals]);

  return (
    <div className="overflow-x-auto shadow-md rounded-t-lg mt-5 bg-white px-2 min_calc_height">
      <table className='w-full text-sm text-left overflow-x-auto'>
        <thead>
          <tr className='text-xs uppercase bg-gray-100'>
            <th className='text-gray-700 py-3'>Operation Type</th>
            <th className='text-gray-700 py-3'>Region Type</th>
            {/* <th className='text-gray-700 py-3'>Recruits Limit</th> */}
            <th className='text-gray-700 py-3'>Min Reward</th>
            <th className='text-gray-700 py-3'>Max Reward</th>
            <th className='text-gray-700 py-3'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vals && vals.map((p, idx) => (
            <tr key={`param_${idx}`} className='bg-white border-b hover:bg-gray-50'>
              <td><input className='w-full bg-transparent p-2 text-center' value={Number(p.operationType).toLocaleString('en-US')} onChange={(e) => {
                setVals(vals.map((v) => {
                  if (v._id !== p._id) return v;
                  return { ...v, operationType: e.target.value }
                }))
              }} /></td>
              <td><input className='w-full bg-transparent p-2 text-center' value={Number(p.regionType).toLocaleString('en-US')} onChange={(e) => {
                setVals(vals.map((v) => {
                  if (v._id !== p._id) return v;
                  return { ...v, regionType: e.target.value }
                }))
              }} /></td>
              {/* <td><input className='w-full bg-transparent p-2 text-center' value={Number(p.recruitsLimit).toLocaleString('en-US')} onChange={(e) => {
                setVals(vals.map((v) => {
                  if (v._id !== p._id) return v;
                  return { ...v, recruitsLimit: e.target.value }
                }))
              }} /></td> */}
              <td><input className='w-full bg-transparent p-2 text-center' value={Number(p.minReward).toLocaleString('en-US')} onChange={(e) => {
                setVals(vals.map((v) => {
                  if (v._id !== p._id) return v;
                  return { ...v, minReward: e.target.value }
                }))
              }} /></td>
              <td><input className='w-full bg-transparent p-2 text-center' value={Number(p.maxReward).toLocaleString('en-US')} onChange={(e) => {
                console.log('okokok', p._id);
                setVals(vals.map((v) => {
                  if (v._id !== p._id) return v;
                  return { ...v, maxReward: e.target.value }
                }))
              }} /></td>
              <td className="px-6 py-4 ">
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="#"
                    type="button"
                    onClick={() => handleEdit(p)}
                    className="text-[18px] text-gray-600"
                  >
                    <FaPen />
                  </a>
                  <a
                    href="#"
                    type="button"
                    onClick={() => handleDelete(p)}
                    className="text-[18px] text-gray-600"
                  >
                    <FaTrashCan />
                  </a>
                </div>
              </td>
            </tr>
          ))}
          <tr className='bg-white border hover:bg-gray-50'>
            <td><input className='w-full bg-transparent p-2 text-center' value={(operationType)} onChange={(e) => setOperationType((e.target.value))} /></td>
            <td><input className='w-full bg-transparent p-2 text-center' value={(regionType)} onChange={(e) => setRegionType((e.target.value))} /></td>
            {/* <td><input className='w-full bg-transparent p-2 text-center' value={(recruitsLimit)} onChange={(e) => setRecruitsLimit((e.target.value))} /></td> */}
            <td><input className='w-full bg-transparent p-2 text-center' value={(minReward)} onChange={(e) => setMinReward((e.target.value))} /></td>
            <td><input className='w-full bg-transparent p-2 text-center' value={(maxReward)} onChange={(e) => setMaxReward((e.target.value))} /></td>
            <td>
              <button onClick={handleAddClicked} className='w-full py-3 bg-blue-500 rounded text-white font-bold'>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}