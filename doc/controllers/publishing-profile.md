# Publishing Profile

```ts
const publishingProfileController = new PublishingProfileController(client);
```

## Class Name

`PublishingProfileController`

## Methods

* [Api Publishing Profile GET](../../doc/controllers/publishing-profile.md#api-publishing-profile-get)
* [Api Publishing Profile POST](../../doc/controllers/publishing-profile.md#api-publishing-profile-post)
* [Api Publishing Profile by Id GET](../../doc/controllers/publishing-profile.md#api-publishing-profile-by-id-get)
* [Api Publishing Profile by Id PUT](../../doc/controllers/publishing-profile.md#api-publishing-profile-by-id-put)
* [Api Publishing Profile by Id DELETE](../../doc/controllers/publishing-profile.md#api-publishing-profile-by-id-delete)


# Api Publishing Profile GET

```ts
async apiPublishingProfileGET(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublishingProfileItem[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishingProfileItem[]`](../../doc/models/publishing-profile-item.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await publishingProfileController.apiPublishingProfileGET();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Publishing Profile POST

```ts
async apiPublishingProfilePOST(
  body?: PublishingProfileCreateCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublishingProfileItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PublishingProfileCreateCommand \| undefined`](../../doc/models/publishing-profile-create-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishingProfileItem`](../../doc/models/publishing-profile-item.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileController.apiPublishingProfilePOST();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ValidationProblemDetailsError`](../../doc/models/validation-problem-details-error.md) |
| Default | Error | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |


# Api Publishing Profile by Id GET

```ts
async apiPublishingProfileByIdGET(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublishingProfileItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishingProfileItem`](../../doc/models/publishing-profile-item.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await publishingProfileController.apiPublishingProfileByIdGET(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ValidationProblemDetailsError`](../../doc/models/validation-problem-details-error.md) |
| 404 | Not Found | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| Default | Error | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |


# Api Publishing Profile by Id PUT

```ts
async apiPublishingProfileByIdPUT(
  id: string,
  body?: PublishingProfileUpdateCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`PublishingProfileUpdateCommand \| undefined`](../../doc/models/publishing-profile-update-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileController.apiPublishingProfileByIdPUT(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ValidationProblemDetailsError`](../../doc/models/validation-problem-details-error.md) |
| 404 | Not Found | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| Default | Error | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |


# Api Publishing Profile by Id DELETE

```ts
async apiPublishingProfileByIdDELETE(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await publishingProfileController.apiPublishingProfileByIdDELETE(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ValidationProblemDetailsError`](../../doc/models/validation-problem-details-error.md) |
| 404 | Not Found | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| Default | Error | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |

