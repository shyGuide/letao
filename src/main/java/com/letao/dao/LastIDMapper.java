package com.letao.dao;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LastIDMapper {
    int selectLastID();
}
