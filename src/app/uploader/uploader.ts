/*
 *
 * This file is part of the White Rabbit application.
 *
 * (c) Vladimir Ganturin <gun2rin@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
export abstract class Uploader<T> {

    getUploader: T;
    upload(): void {}
    beforeUpload(options: any, data: string): void {}
}
