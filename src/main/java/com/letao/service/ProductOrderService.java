package com.letao.service;

import com.letao.entity.OrderGroup;
import com.letao.entity.ProductOrder;
import com.letao.util.OrderUtil;
import com.letao.util.PageUtil;

import java.util.Date;
import java.util.List;

public interface ProductOrderService {
    boolean add(ProductOrder productOrder);
    boolean update(ProductOrder productOrder);
    boolean deleteList(Integer[] productOrder_id_list);

    List<ProductOrder> getList(ProductOrder productOrder, Byte[] productOrder_status_array, OrderUtil orderUtil, PageUtil pageUtil);

    List<OrderGroup> getTotalByDate(Date beginDate, Date endDate);

    ProductOrder get(Integer productOrder_id);
    ProductOrder getByCode(String productOrder_code);
    Integer getTotal(ProductOrder productOrder,Byte[] productOrder_status_array);
}
