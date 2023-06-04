# coding: utf-8

"""
    Strava API v3

    The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.  # noqa: E501

    OpenAPI spec version: 3.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from swagger_client.api_client import ApiClient


class StreamsApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def get_activity_streams(self, id, keys, key_by_type, **kwargs):  # noqa: E501
        """Get Activity Streams  # noqa: E501

        Returns the given activity's streams. Requires activity:read scope. Requires activity:read_all scope for Only Me activities.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_activity_streams(id, keys, key_by_type, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int id: The identifier of the activity. (required)
        :param list[str] keys: Desired stream types. (required)
        :param bool key_by_type: Must be true. (required)
        :return: StreamSet
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_activity_streams_with_http_info(id, keys, key_by_type, **kwargs)  # noqa: E501
        else:
            (data) = self.get_activity_streams_with_http_info(id, keys, key_by_type, **kwargs)  # noqa: E501
            return data

    def get_activity_streams_with_http_info(self, id, keys, key_by_type, **kwargs):  # noqa: E501
        """Get Activity Streams  # noqa: E501

        Returns the given activity's streams. Requires activity:read scope. Requires activity:read_all scope for Only Me activities.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_activity_streams_with_http_info(id, keys, key_by_type, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int id: The identifier of the activity. (required)
        :param list[str] keys: Desired stream types. (required)
        :param bool key_by_type: Must be true. (required)
        :return: StreamSet
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['id', 'keys', 'key_by_type']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_activity_streams" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'id' is set
        if ('id' not in params or
                params['id'] is None):
            raise ValueError("Missing the required parameter `id` when calling `get_activity_streams`")  # noqa: E501
        # verify the required parameter 'keys' is set
        if ('keys' not in params or
                params['keys'] is None):
            raise ValueError("Missing the required parameter `keys` when calling `get_activity_streams`")  # noqa: E501
        # verify the required parameter 'key_by_type' is set
        if ('key_by_type' not in params or
                params['key_by_type'] is None):
            raise ValueError("Missing the required parameter `key_by_type` when calling `get_activity_streams`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'id' in params:
            path_params['id'] = params['id']  # noqa: E501

        query_params = []
        if 'keys' in params:
            query_params.append(('keys', params['keys']))  # noqa: E501
            collection_formats['keys'] = 'csv'  # noqa: E501
        if 'key_by_type' in params:
            query_params.append(('key_by_type', params['key_by_type']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['strava_oauth']  # noqa: E501

        return self.api_client.call_api(
            '/activities/{id}/streams', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='StreamSet',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_route_streams(self, id, **kwargs):  # noqa: E501
        """Get Route Streams  # noqa: E501

        Returns the given route's streams. Requires read_all scope for private routes.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_route_streams(id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int id: The identifier of the route. (required)
        :return: StreamSet
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_route_streams_with_http_info(id, **kwargs)  # noqa: E501
        else:
            (data) = self.get_route_streams_with_http_info(id, **kwargs)  # noqa: E501
            return data

    def get_route_streams_with_http_info(self, id, **kwargs):  # noqa: E501
        """Get Route Streams  # noqa: E501

        Returns the given route's streams. Requires read_all scope for private routes.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_route_streams_with_http_info(id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int id: The identifier of the route. (required)
        :return: StreamSet
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_route_streams" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'id' is set
        if ('id' not in params or
                params['id'] is None):
            raise ValueError("Missing the required parameter `id` when calling `get_route_streams`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'id' in params:
            path_params['id'] = params['id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['strava_oauth']  # noqa: E501

        return self.api_client.call_api(
            '/routes/{id}/streams', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='StreamSet',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_segment_effort_streams(self, id, keys, key_by_type, **kwargs):  # noqa: E501
        """Get Segment Effort Streams  # noqa: E501

        Returns a set of streams for a segment effort completed by the authenticated athlete. Requires read_all scope.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_segment_effort_streams(id, keys, key_by_type, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int id: The identifier of the segment effort. (required)
        :param list[str] keys: The types of streams to return. (required)
        :param bool key_by_type: Must be true. (required)
        :return: StreamSet
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_segment_effort_streams_with_http_info(id, keys, key_by_type, **kwargs)  # noqa: E501
        else:
            (data) = self.get_segment_effort_streams_with_http_info(id, keys, key_by_type, **kwargs)  # noqa: E501
            return data

    def get_segment_effort_streams_with_http_info(self, id, keys, key_by_type, **kwargs):  # noqa: E501
        """Get Segment Effort Streams  # noqa: E501

        Returns a set of streams for a segment effort completed by the authenticated athlete. Requires read_all scope.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_segment_effort_streams_with_http_info(id, keys, key_by_type, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int id: The identifier of the segment effort. (required)
        :param list[str] keys: The types of streams to return. (required)
        :param bool key_by_type: Must be true. (required)
        :return: StreamSet
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['id', 'keys', 'key_by_type']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_segment_effort_streams" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'id' is set
        if ('id' not in params or
                params['id'] is None):
            raise ValueError("Missing the required parameter `id` when calling `get_segment_effort_streams`")  # noqa: E501
        # verify the required parameter 'keys' is set
        if ('keys' not in params or
                params['keys'] is None):
            raise ValueError("Missing the required parameter `keys` when calling `get_segment_effort_streams`")  # noqa: E501
        # verify the required parameter 'key_by_type' is set
        if ('key_by_type' not in params or
                params['key_by_type'] is None):
            raise ValueError("Missing the required parameter `key_by_type` when calling `get_segment_effort_streams`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'id' in params:
            path_params['id'] = params['id']  # noqa: E501

        query_params = []
        if 'keys' in params:
            query_params.append(('keys', params['keys']))  # noqa: E501
            collection_formats['keys'] = 'csv'  # noqa: E501
        if 'key_by_type' in params:
            query_params.append(('key_by_type', params['key_by_type']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['strava_oauth']  # noqa: E501

        return self.api_client.call_api(
            '/segment_efforts/{id}/streams', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='StreamSet',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_segment_streams(self, id, keys, key_by_type, **kwargs):  # noqa: E501
        """Get Segment Streams  # noqa: E501

        Returns the given segment's streams. Requires read_all scope for private segments.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_segment_streams(id, keys, key_by_type, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int id: The identifier of the segment. (required)
        :param list[str] keys: The types of streams to return. (required)
        :param bool key_by_type: Must be true. (required)
        :return: StreamSet
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_segment_streams_with_http_info(id, keys, key_by_type, **kwargs)  # noqa: E501
        else:
            (data) = self.get_segment_streams_with_http_info(id, keys, key_by_type, **kwargs)  # noqa: E501
            return data

    def get_segment_streams_with_http_info(self, id, keys, key_by_type, **kwargs):  # noqa: E501
        """Get Segment Streams  # noqa: E501

        Returns the given segment's streams. Requires read_all scope for private segments.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_segment_streams_with_http_info(id, keys, key_by_type, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int id: The identifier of the segment. (required)
        :param list[str] keys: The types of streams to return. (required)
        :param bool key_by_type: Must be true. (required)
        :return: StreamSet
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['id', 'keys', 'key_by_type']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_segment_streams" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'id' is set
        if ('id' not in params or
                params['id'] is None):
            raise ValueError("Missing the required parameter `id` when calling `get_segment_streams`")  # noqa: E501
        # verify the required parameter 'keys' is set
        if ('keys' not in params or
                params['keys'] is None):
            raise ValueError("Missing the required parameter `keys` when calling `get_segment_streams`")  # noqa: E501
        # verify the required parameter 'key_by_type' is set
        if ('key_by_type' not in params or
                params['key_by_type'] is None):
            raise ValueError("Missing the required parameter `key_by_type` when calling `get_segment_streams`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'id' in params:
            path_params['id'] = params['id']  # noqa: E501

        query_params = []
        if 'keys' in params:
            query_params.append(('keys', params['keys']))  # noqa: E501
            collection_formats['keys'] = 'csv'  # noqa: E501
        if 'key_by_type' in params:
            query_params.append(('key_by_type', params['key_by_type']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['strava_oauth']  # noqa: E501

        return self.api_client.call_api(
            '/segments/{id}/streams', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='StreamSet',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
