import request from '@/utils/request';
import { DataItem } from './data.d';

/**
 * 随笔管理 - 新增
 * @param data  请求参数
 * @returns
 * @author QuerySystem
 */
export async function articleAdd(data?: DataItem): Promise<any> {
  return request({
    url: '/articles',
    method: 'post',
    data,
  });
}


