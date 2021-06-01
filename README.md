# Sound//Infra Publish Action

This action publishes the contents of your publish directory to your domain,
Powered by Sound//Infra.

## Inputs

### `publish-domain`

**Required** The name of your domain, for example, `myblog.com`.

### `publish-directory`
The directory to be published, defaults to `"public"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: soundinfra/publish-action@v1.0
with:
  publish-domain: 'myblog.com'
```
