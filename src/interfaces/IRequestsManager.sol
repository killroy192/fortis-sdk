// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.16;

interface IRequestsManager {
    enum RequestStatus {
        Init,
        Pending,
        Fulfilled
    }

    struct RequestStats {
        RequestStatus status;
        uint256 blockNumber;
    }

    function addRequest(bytes32 _id) external returns (bool);

    function fulfillRequest(bytes32 _id) external returns (bool);

    function getRequest(
        bytes32 _id
    ) external view returns (RequestStats memory);
}
