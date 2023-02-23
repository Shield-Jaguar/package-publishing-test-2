# Publishing

```ts
const publishingController = new PublishingController(client);
```

## Class Name

`PublishingController`


# Api Publish by Profile Id POST

```ts
async apiPublishByProfileIdPOST(
  profileId: string,
  body?: PublishSdkPublishCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `body` | [`PublishSdkPublishCommand \| undefined`](../../doc/models/publish-sdk-publish-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingController.apiPublishByProfileIdPOST(profileId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

