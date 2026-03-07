import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AboutController::edit
 * @see app/Http/Controllers/Admin/AboutController.php:10
 * @route '/admin/about'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AboutController::edit
 * @see app/Http/Controllers/Admin/AboutController.php:10
 * @route '/admin/about'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AboutController::edit
 * @see app/Http/Controllers/Admin/AboutController.php:10
 * @route '/admin/about'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AboutController::edit
 * @see app/Http/Controllers/Admin/AboutController.php:10
 * @route '/admin/about'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AboutController::edit
 * @see app/Http/Controllers/Admin/AboutController.php:10
 * @route '/admin/about'
 */
    const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AboutController::edit
 * @see app/Http/Controllers/Admin/AboutController.php:10
 * @route '/admin/about'
 */
        editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AboutController::edit
 * @see app/Http/Controllers/Admin/AboutController.php:10
 * @route '/admin/about'
 */
        editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\AboutController::update
 * @see app/Http/Controllers/Admin/AboutController.php:17
 * @route '/admin/about'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/about',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\AboutController::update
 * @see app/Http/Controllers/Admin/AboutController.php:17
 * @route '/admin/about'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AboutController::update
 * @see app/Http/Controllers/Admin/AboutController.php:17
 * @route '/admin/about'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\AboutController::update
 * @see app/Http/Controllers/Admin/AboutController.php:17
 * @route '/admin/about'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AboutController::update
 * @see app/Http/Controllers/Admin/AboutController.php:17
 * @route '/admin/about'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const about = {
    edit: Object.assign(edit, edit),
update: Object.assign(update, update),
}

export default about